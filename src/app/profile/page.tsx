import { Suspense } from 'react'
import ProfileForm from '@/components/ProfileForm'

export default function Profile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>
      
      <div className="max-w-2xl mx-auto">
        <Suspense fallback={<div>Loading profile...</div>}>
          <ProfileForm />
        </Suspense>
      </div>
    </div>
  )
}