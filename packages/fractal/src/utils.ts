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
  propNames: Array<string> | string,
): boolean {
  const propsToCheck = Array.isArray(propNames) ? propNames : [propNames]

  let hasProps = false

  Children.forEach(children, (child) => {
    if (hasProps) {
      return
    }

    if (!isValidElement(child)) {
      return
    }

    hasProps = propsToCheck.every(
      (propName) =>
        Object.prototype.hasOwnProperty.call(child.props, propName) &&
        Boolean(child.props[propName]),
    )

    if (!hasProps && child.props.children) {
      hasProps = hasChildWithProps(child.props.children, propNames)
    }
  })

  return hasProps
}

export function rangeStep(start: number, end: number, step: number): number[] {
  const result: number[] = []

  for (let i = start; i <= end; i += step) {
    result.push(i)
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
          childType as unknown as Record<string, unknown> & {
            displayName: string
          }
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
