// Type definitions

/**
 * asynchronous method
 *   - `dir` folder path
 */
export function getFilePaths(dir: string): Promise<String[]>

/**
 * synchronous method
 *   - `dir` folder path
 */
export function getFilePathsSync(dir: string): String[]
