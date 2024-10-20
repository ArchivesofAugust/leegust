export const isProduction = () => {
  return process.env.NEXT_PUBLIC_STAGE === 'production'
}
