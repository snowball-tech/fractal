import isArray from 'lodash/fp/isArray'
import isEmpty from 'lodash/fp/isEmpty'
import isObject from 'lodash/fp/isObject'
import { Children, type ReactNode, cloneElement, isValidElement } from 'react'

export function sleep(timeInMs: number) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, timeInMs))
}

export function hasChildWithProps(
  children: ReactNode,
  propertyNames: Array<string> | string,
): boolean {
  const propsToCheck = Array.isArray(propertyNames)
    ? propertyNames
    : [propertyNames]

  let hasProps = false

  Children.forEach(children, (child) => {
    if (hasProps) {
      return
    }

    if (!isValidElement(child)) {
      return
    }

    hasProps = propsToCheck.every(
      (propertyName) =>
        Object.prototype.hasOwnProperty.call(child.props, propertyName) &&
        Boolean(child.props[propertyName]),
    )

    if (!hasProps && child.props.children) {
      hasProps = hasChildWithProps(child.props.children, propertyNames)
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
  return Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return child
    }

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
        return cloneElement(child, props(child.props))
      }
    }

    if (!isEmpty(child.props.children) && isArray(child.props.children)) {
      return cloneElement(
        child,
        props(child.props),
        extendChildren(child.props.children, props, displayName),
      )
    }

    return cloneElement(child, props(child.props))
  })
}
