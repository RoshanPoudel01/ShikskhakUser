import { useGetMyClasses } from "@shikshak/services/service-class";

const EnrolledClasses = () => {
  const { data } = useGetMyClasses();

  console.log(data);
  return <div>EnrolledClasses</div>;
};

export default EnrolledClasses;
