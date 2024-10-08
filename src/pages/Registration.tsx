import { useForm, FormProvider, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegistrationData } from "../interface";
import { pageFieldGroups } from "../utils";
import logo from "../assets/popup_logo_white.svg";
import { registrationSchema } from "../schema/schema";
import ProgressBar from "../components/Registration/ProgresBar";
import usePageCounter from "../hooks/usePageCounter";
import FormPage from "../components/Registration/FormPage";
import { useEffect } from "react";

export default function Registration() {
  const { pageCount, incrementPageCount, decrementPageCount } =
    usePageCounter();

  const methods = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      username: localStorage.getItem("username") || "",
      email: localStorage.getItem("email") || "",
      password: localStorage.getItem("password") || "",
      confirmPassword: localStorage.getItem("confirmPassword") || "",
    },
  });

  const { control } = methods;
  const formValues = useWatch({ control });

  useEffect(() => {
    localStorage.setItem("username", formValues.username || "");
    localStorage.setItem("email", formValues.email || "");
    localStorage.setItem("password", formValues.password || "");
    localStorage.setItem("confirmPassword", formValues.confirmPassword || "");
  }, [formValues]);

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
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("confirmPassword");
  };

  return (
    <main className="flex items-center justify-center">
      <div className="flex items-center justify-between w-1/2 bg-white rounded-lg shadow-md max-lg:w-full max-lg:flex-col max-lg:mx-12 ">
        <div className="bg-[#d8046c] rounded-lg min-h-[440px] flex items-center justify-center w-1/2 max-lg:w-full max-lg:min-h-28">
          <img src={logo} alt="logo" />
        </div>
        <div className="w-1/2 relative min-h-[440px] flex items-center justify-center max-lg:w-full max-lg:p-5">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              {pageCount === 3 ? null : (
                <div className="mb-12 ">
                  <h1 className="mb-4 font-bold text-4xl text-center text-gray-400">
                    რეგისტრაცია
                  </h1>
                  <ProgressBar pageCount={pageCount} />
                </div>
              )}
              <div>
                <FormPage pageCount={pageCount} />
                <div className="flex items-center justify-between mt-5">
                  {pageCount === 3 ? null : (
                    <>
                      {pageCount !== 0 && (
                        <button
                          type="button"
                          disabled={pageCount === 0}
                          onClick={decrementPageCount}
                          className={`p-3 bg-[#d8046c] text-white text-lg rounded hover:bg-[#c7005d] transition duration-300 ${
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
                          className="p-3 bg-[#d8046c] hover:bg-[#c7005d] transition duration-300 text-white text-lg rounded"
                          type="submit"
                        >
                          დასრულება
                        </button>
                      ) : (
                        <div className="flex justify-end w-full">
                          <button
                            className="p-3 bg-[#d8046c] hover:bg-[#c7005d] transition duration-300 text-white text-lg rounded"
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
