import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller, useFieldArray } from "react-hook-form";

const FieldArray = () => {
  const schema = yup.object().shape({
    items: yup.array().of(
      yup.object().shape({
        text: yup.string().required("Text is required"),
        time: yup
          .object()
          .shape({
            start: yup.string().matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid start time"),
            end: yup.string().matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid end time"),
          })
          .test("time-validation", "End time must be greater than start time", function (value) {
            if (value && value.start && value.end) {
              return value.start < value.end;
            }
            return true;
          })
          .required("Time is required"),
      })
    ),
  });

  const { control, handleSubmit, setError, errors } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      items: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  console.log(errors);

  const onSubmit = (data) => {
    console.log(data.items);
    // Send data.items to the backend
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {fields.map((field, index) => (
            <div key={field.id}>
              <Controller
                name={`items[${index}].text`}
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} placeholder="Text" />}
              />
              <Controller
                name={`items[${index}].time.start`}
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} placeholder="Start Time" />}
              />
              <Controller
                name={`items[${index}].time.end`}
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} placeholder="End Time" />}
              />
              <button
                type="button"
                onClick={() => {
                  remove(index);
                  setError(`items[${index}].text`, {
                    type: "manual",
                    message: "test", // You can provide a custom message here
                  });
                  setError(`items[${index}].time.start`, {
                    type: "manual",
                    message: "", // You can provide a custom message here
                  });
                  setError(`items[${index}].time.end`, {
                    type: "manual",
                    message: "", // You can provide a custom message here
                  });
                }}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              append({
                text: "",
                time: { start: "", end: "" },
              })
            }
          >
            Add Item
          </button>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default FieldArray;
