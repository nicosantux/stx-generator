import { type PACKAGE_MANAGER } from '../constants/index.js'

export type PackageManger = (typeof PACKAGE_MANAGER)[number]
