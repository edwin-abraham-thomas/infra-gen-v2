export interface Api {
    healthCheck(): boolean,
    getSystemInfo(): unknown
}