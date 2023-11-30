import { Children, type ReactNode, isValidElement } from 'react'

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
