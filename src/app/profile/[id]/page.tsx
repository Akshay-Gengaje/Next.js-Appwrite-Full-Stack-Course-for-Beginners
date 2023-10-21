export default function UserProfilePage({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">User Profile</h1>
      <hr />
      <p className="text-2xl">
        User Profile
        <span className="bg-orange-500 p-1 mx-1 rounded-md">{params.id}</span>
      </p>
    </div>
  );
}
