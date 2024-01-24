export default function LoginForm() {
  return (
    <div className="container">
      <form className="bg-red-500 text-center w-1/3 px-3 py-4 text-white mx-auto rounded">
        <input
          type="text"
          placeholder="Username"
          className="block w-full mx-auto text-sm text-black py-2 px-3 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full mx-auto text-sm text-black py-2 px-3 rounded my-3"
        />
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded border block mx-auto w-full">
          Login
        </button>
      </form>
    </div>
  );
}
