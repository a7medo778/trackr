import Auth from '@/components/Auth'

export default function Login() {
  return (
    <div className="flex-1 flex flex-col w-full px-8 justify-center gap-2">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold">Welcome to Trackr</h1>
        <p className="text-gray-600">
          Sign in via magic link with your email below
        </p>
      </div>
      <Auth />
    </div>
  )
}