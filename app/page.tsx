import { Suspense } from "react";
import Header from "./components/header/header";

async function getUsers() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export default async function Home() {
  const users = await getUsers();

  return (
    <>
      <Header />
      <div className="p-4">
        <h1>Users</h1>
        {users && users.length > 0 ? (
          <ul>
            {users.map((user: any) => (
              <li key={user.uid}>{user.uname}</li>
            ))}
          </ul>
        ) : (
          <p>No users found</p>
        )}
      </div>
    </>
  );
}

