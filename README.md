# Next.js router.push Async Issue

This repository demonstrates an uncommon issue with `router.push` in Next.js where subsequent code executes before the route change is complete.  This can lead to unexpected behavior if the following code relies on the route transition.

## Bug Description

The `bug.js` file shows a simple component that uses `router.push` to navigate to a new page.  However, the `console.log` statement runs *before* the route actually changes, leading to incorrect output.

## Solution

The `bugSolution.js` file demonstrates the solution using the `router.events` and the `routeChangeComplete` event.