import CommitteeMembers from "@/components/CommitteeMembers";
import Navbar from "@/components/Navbar";

const committemembers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="min-h-screen">
        <CommitteeMembers />
      </div>
    </div>
  );
};

export default committemembers;
