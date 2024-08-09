import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Done from "../components/FormFields/Done";
import Email from "../components/FormFields/Email";
import Password from "../components/FormFields/Password";
import UserName from "../components/FormFields/UserName";
import { usePageCounterStore } from "../context/store";
import { RegistrationData } from "../interface";

const registrationSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function Registration() {
  const pageCount = usePageCounterStore((state) => state.pageCount);
  const incrementPageCount = usePageCounterStore(
    (state) => state.incrementPageCount
  );
  const decrementPageCount = usePageCounterStore(
    (state) => state.decrementPageCount
  );

  const methods = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const titles = ["Username", "Email", "Password", "Done"];

  const pageFieldGroups: Array<(keyof RegistrationData)[]> = [
    ["username"],
    ["email"],
    ["password"],
  ];
  
  const formPageDisplay = () => {
    if (pageCount === 0) {
      return <UserName />;
    } else if (pageCount === 1) {
      return <Email />;
    } else if (pageCount === 2) {
      return <Password />;
    } else {
      return <Done />;
    }
  };

  const handleNextPage = async () => {
    const fieldsToValidate = pageFieldGroups[pageCount];
    const isValid = await methods.trigger(fieldsToValidate);
    if (isValid) {
      incrementPageCount();
    }
  };

  const onSubmit = (data: RegistrationData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div>
          <div>{titles[pageCount]}</div>
          <div>{formPageDisplay()}</div>
          <div>
            <button
              type="button"
              disabled={pageCount === 0}
              onClick={decrementPageCount}
            >
              Prev
            </button>
            {pageCount === 3 ? (
              <button type="submit">Submit</button>
            ) : (
              <button type="button" onClick={handleNextPage}>
                Next
              </button>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
