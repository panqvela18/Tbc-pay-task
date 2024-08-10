import Done from "../FormFields/Done";
import Email from "../FormFields/Email";
import Password from "../FormFields/Password";
import UserName from "../FormFields/UserName";

const FormPage = ({ pageCount }: { pageCount: number }) => {
  switch (pageCount) {
    case 0:
      return <UserName />;
    case 1:
      return <Email />;
    case 2:
      return <Password />;
    default:
      return <Done />;
  }
};

export default FormPage;
