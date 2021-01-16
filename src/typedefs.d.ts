import { TSESTree } from '@typescript-eslint/typescript-estree'

declare global {
  interface PartialResult<T> {
    errors: Error[],
    partial: T | null
  }

  type ESTreeToken = TSESTree.Token
}
