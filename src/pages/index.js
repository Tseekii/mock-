import Image from "next/image";


export default function Home() {
  
    const [searchValue, sersearchvalue] = useState("")
    const [users, setUsers] = useState([""

    ]);
    const handleChange =(text) => {
      setsearchValue (text);
      //hereglegchiig haij olno
      const findUser = profiles.filter((users)) =>
       users.Firstname.toLowerCase().includes(text.toLowerCase())
      setUsers(findUser);
    }
     return (
      <main className="flex flex-col items-center">
        <h1 className="text-5xl text-gray-950">User Find Application</h1>
        <div className="flex,flex-col gap-5 mt-6">
          <Input></Input>
        </div>
      </main>
     )
}
  ``
