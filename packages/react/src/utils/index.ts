import { Breakpoints } from '@/constants'
import { Breakpoint } from '@/types'

export function getBreakpointCssVarWithFallback(
  varName: string,
  breakpoint: Breakpoint,
): string {
  switch (breakpoint) {
    case Breakpoints.xs:
      return `var(${varName}-${breakpoint}, var(${varName}))`

    case Breakpoints.sm:
      return `var(${varName}-${breakpoint}, ${getBreakpointCssVarWithFallback(
        varName,
        Breakpoints.xs,
      )})`

    case Breakpoints.md:
      return `var(${varName}-${breakpoint}, ${getBreakpointCssVarWithFallback(
        varName,
        Breakpoints.sm,
      )})`

    case Breakpoints.lg:
      return `var(${varName}-${breakpoint}, ${getBreakpointCssVarWithFallback(
        varName,
        Breakpoints.md,
      )})`

    case Breakpoints.xl:
      return `var(${varName}-${breakpoint}, ${getBreakpointCssVarWithFallback(
        varName,
        Breakpoints.lg,
      )})`

    case Breakpoints.xxl:
      return `var(${varName}-${breakpoint}, ${getBreakpointCssVarWithFallback(
        varName,
        Breakpoints.xl,
      )})`

    default:
      return `var(${varName})`
  }
}
