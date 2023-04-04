import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./BookingForm.css";

function BookingForm({ availableTimes, dispatch }) {
  const toast = useToast();

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    dispatch(values.time);
    setTimeout(() => {
      toast({
        title: "Reservation submitted!",
        status: "success",
        isClosable: true,
      });
      setSubmitting(false);
    }, 2000);
  };

  const validationSchema = Yup.object().shape({
    date: Yup.date().required("Required"),
    time: Yup.string().required("Required"),
    guests: Yup.number()
      .min(1, "Must be at least 1")
      .max(10, "Can't be more than 10")
      .required("Required"),
    occasion: Yup.string().required("Required"),
  });

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Heading>Reserve a table</Heading>
      <Formik
        initialValues={{
          date: "",
          time: "",
          guests: "",
          occasion: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Field name="date">
              {({ field }) => (
                <FormControl id="date" isInvalid={errors.date && touched.date}>
                  <FormLabel>Date</FormLabel>
                  <Input type="date" {...field} />
                </FormControl>
              )}
            </Field>
            <Field name="time">
              {({ field }) => (
                <FormControl
                  id="time"
                  mt={4}
                  isInvalid={errors.time && touched.time}
                >
                  <FormLabel>Time</FormLabel>
                  <Select placeholder="Select time" {...field}>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              )}
            </Field>
            <Field name="guests">
              {({ field }) => (
                <FormControl
                  id="guests"
                  mt={4}
                  isInvalid={errors.guests && touched.guests}
                >
                  <FormLabel>Number of guests</FormLabel>
                  <Input type="number" min={1} max={10} {...field} />
                </FormControl>
              )}
            </Field>
            <Field name="occasion">
              {({ field }) => (
                <FormControl
                  id="occasion"
                  mt={4}
                  isInvalid={errors.occasion && touched.occasion}
                >
                  <FormLabel>Occasion</FormLabel>
                  <Select placeholder="Select occasion" {...field}>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                  </Select>
                </FormControl>
              )}
            </Field>
            <Button
              type="submit"
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
            >
              Make your reservation
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default BookingForm;
