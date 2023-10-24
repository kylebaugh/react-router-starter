import { useLoaderData } from 'react-router-dom';

export function Home() {
  return <h2>Home</h2>;
}

export function About() {
  return <h2>About</h2>;
}

export function UserProfile() {
  const { name, hobby, funFact } = useLoaderData();
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Hobby: {hobby}</h3>
      <h3>Fun Fact: {funFact}</h3>
    </div>
  );
}
