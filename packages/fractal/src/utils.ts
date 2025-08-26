import {
  type ReactNode,
  Children,
  cloneElement,
  Fragment,
  isValidElement,
  JSXElementConstructor,
} from 'react'

import isArray from 'lodash/fp/isArray'
import isEmpty from 'lodash/fp/isEmpty'
import isNil from 'lodash/fp/isNil'
import isObject from 'lodash/fp/isObject'

export function sleep(timeInMs: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeInMs)
  })
}

export function hasChildWithProps(
  children: ReactNode,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  childType: '*' | JSXElementConstructor<any>,
  propertyNames: string | Array<string>,
  notPropertyNames?: string | Array<string>,
): boolean {
  const propsToCheck = Array.isArray(propertyNames)
    ? propertyNames
    : [propertyNames]

  const propsToCheckAreNotThere =
    isNil(notPropertyNames) || isEmpty(notPropertyNames)
      ? []
      : Array.isArray(notPropertyNames)
        ? notPropertyNames
        : [notPropertyNames]

  let hasProps = false

  Children.forEach(children, (child) => {
    if (hasProps) {
      return
    }

    if (!isValidElement(child)) {
      return
    }

    const props = child.props as Record<string, unknown>

    hasProps =
      (childType === '*' || child.type === childType) &&
      propsToCheck.every(
        (propertyName) =>
          Object.hasOwn(props, propertyName) && Boolean(props[propertyName]),
      )

    if (!hasProps && props.children) {
      hasProps = hasChildWithProps(
        props.children as ReactNode,
        childType,
        propertyNames,
        notPropertyNames,
      )
    } else if (hasProps && !isEmpty(propsToCheckAreNotThere)) {
      hasProps = propsToCheckAreNotThere.every(
        (propertyName) => !Object.hasOwn(props, propertyName),
      )
    }
  })

  return hasProps
}

export function rangeStep(start: number, end: number, step: number): number[] {
  const result: number[] = []

  for (let index = start; index <= end; index += step) {
    result.push(index)
  }

  return result
}

export function extendChildren(
  children: ReactNode,
  props: (childProps: Record<string, unknown>) => Record<string, unknown>,
  displayName?: string,
): ReactNode {
  let childrenToIterateOver = children
  if (Children.count(children) === 0) {
    return children
  }
  if (
    Children.count(children) === 1 &&
    isValidElement(children) &&
    children.type === Fragment
  ) {
    childrenToIterateOver = (children.props as Record<string, unknown>)
      .children as ReactNode
  }

  return Children.map(childrenToIterateOver, (child) => {
    if (!isValidElement(child)) {
      return child
    }

    const childProps = child.props as Record<string, unknown>

    if (!isEmpty(displayName)) {
      const childType = child.type
      if (
        isObject(childType) &&
        (
          childType as unknown as {
            displayName: string
          } & Record<string, unknown>
        ).displayName !== displayName
      ) {
        return cloneElement(child, props(childProps))
      }
    }

    if (!isEmpty(childProps.children) && isArray(childProps.children)) {
      return cloneElement(
        child,
        props(childProps),
        extendChildren(childProps.children, props, displayName),
      )
    }

    return cloneElement(child, props(childProps))
  })
}
