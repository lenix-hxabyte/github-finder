import { useContext } from "react";
import spinner from "../layout/assets/spinner.gif";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";
function UserResults() {
  const { users, loading } = useContext(GithubContext);
  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="w-100 mt-20">
        <img width={180} className="text-center mx-auto" src={spinner} alt="" />
      </div>
    );
  }
}

export default UserResults;
