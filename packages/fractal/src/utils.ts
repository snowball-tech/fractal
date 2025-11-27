import {
  type ReactNode,
  Children,
  cloneElement,
  Fragment,
  isValidElement,
  JSXElementConstructor,
} from 'react'

import isArray from 'lodash/fp/isArray'
import isBoolean from 'lodash/fp/isBoolean'
import isEmpty from 'lodash/fp/isEmpty'
import isNil from 'lodash/fp/isNil'
import isNumber from 'lodash/fp/isNumber'
import isObject from 'lodash/fp/isObject'
import isString from 'lodash/fp/isString'

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

    const childType = child.type
    const childProps = child.props as Record<string, unknown>

    if (!isEmpty(displayName)) {
      if (
        (isString(childType) && childType !== displayName) ||
        (isObject(childType) &&
          (
            childType as unknown as {
              displayName: string
            } & Record<string, unknown>
          ).displayName !== displayName)
      ) {
        return cloneElement(child, { ...childProps })
      }
    }

    if (!isEmpty(childProps.children) && isArray(childProps.children)) {
      return cloneElement(
        child,
        { ...childProps, ...props(childProps) },
        extendChildren(childProps.children, props, displayName),
      )
    }

    return cloneElement(child, props(childProps))
  })
}

export function onlyText(reactNode: ReactNode) {
  try {
    if (isNil(reactNode) || isBoolean(reactNode) || !reactNode) {
      return ''
    }

    let string = ''

    if (isString(reactNode)) {
      string = reactNode
    } else if (isNumber(reactNode)) {
      string = reactNode.toString()
    } else if (isObject(reactNode) && Symbol.iterator in reactNode) {
      for (const child of reactNode) {
        string += onlyText(child)
      }
    } else if (isValidElement(reactNode)) {
      string += onlyText(
        (reactNode.props as Record<string, unknown>).children as ReactNode,
      )
    }

    return string.replaceAll('[object Object]', '').trim()
  } catch {
    return ''
  }
}
