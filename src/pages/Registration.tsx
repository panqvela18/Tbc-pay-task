import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Done from "../components/FormFields/Done";
import Email from "../components/FormFields/Email";
import Password from "../components/FormFields/Password";
import UserName from "../components/FormFields/UserName";
import { usePageCounterStore } from "../context/store";
import { RegistrationData } from "../interface";
import { pageFieldGroups, registrationSchema } from "../utils";
import logo from "../assets/popup_logo_white.svg";

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
    incrementPageCount();
  };

  return (
    <main className="flex items-center justify-center">
      <div className="flex items-center justify-between w-1/2 bg-white rounded-lg shadow-md">
        <div className="bg-[#d8046c] rounded-lg min-h-[440px] flex items-center justify-center w-1/2">
          <img src={logo} alt="logo" />
        </div>
        <div className="w-1/2 relative min-h-[440px] flex items-center justify-center">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              {pageCount === 3 ? null : (
                <div className="mb-12 ">
                  <h1 className="mb-2 font-bold text-4xl text-center text-gray-400">
                    რეგისტრაცია
                  </h1>
                  <div className="relative w-full h-2 bg-gray-200 rounded">
                    <div
                      className="absolute top-0 left-0 h-2 bg-[#d8046c] rounded"
                      style={{
                        width:
                          pageCount === 0
                            ? "0%"
                            : pageCount === 1
                            ? "33.3%"
                            : pageCount === 2
                            ? "66.7%"
                            : "100%",
                      }}
                    ></div>
                  </div>
                </div>
              )}

              <div>
                <div>{formPageDisplay()}</div>
                <div className="flex items-center justify-between mt-5">
                  {pageCount === 3 ? null : (
                    <>
                      {pageCount !== 0 && (
                        <button
                          type="button"
                          disabled={pageCount === 0}
                          onClick={decrementPageCount}
                          className={`p-3 bg-[#d8046c] text-white text-lg rounded ${
                            pageCount === 0
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                        >
                          უკან
                        </button>
                      )}
                      {pageCount === 2 ? (
                        <button
                          className="p-3 bg-[#d8046c] text-white text-lg rounded"
                          type="submit"
                        >
                          დასრულება
                        </button>
                      ) : (
                        <div className="flex justify-end w-full">
                          <button
                            className="p-3 bg-[#d8046c] text-white text-lg rounded"
                            type="button"
                            onClick={handleNextPage}
                          >
                            შემდეგი
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </main>
  );
}
