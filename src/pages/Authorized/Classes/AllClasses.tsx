import { useGetAllClasses } from "@shikshak/services/service-class";

const AllClasses = () => {
  const { data, isLoading } = useGetAllClasses();
  console.log(data);
  return <div>AllClasses</div>;
};

export default AllClasses;
