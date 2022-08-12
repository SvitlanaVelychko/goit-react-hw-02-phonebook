import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import PropTypes from 'prop-types';
import Section from "components/Section";
import { Input, Label, Error, AddBtn } from './ContactForm.styled';



const NAME_MATCH = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const nameError = "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const numberError = "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +";
const requiredError = "This field is required";

const schema = yup.object().shape({
    name: yup.string().required(requiredError).matches(NAME_MATCH, nameError),
    number: yup.string().required(requiredError).matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, numberError),
});

const initialValues = {
    name: '',
    number: '',
};

const ContactForm = ({ onSubmit }) => {
    return (
        <Section >
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
            >
                <Form autoComplete="off" onSubmit={onSubmit}>
                    <Label htmlFor="name">Name
                        <Input
                            type="text"
                            name="name"
                            pattern={NAME_MATCH}
                            required
                        />
                        <ErrorMessage name="name" render={msg => <Error>{nameError}</Error>} />
                    </Label>
                    <Label htmlFor="number">Number
                        <Input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            required
                        />
                        <ErrorMessage name="number" render={msg => <Error>{numberError}</Error>} />
                    </Label>
                    <AddBtn type="submit">Add contact</AddBtn>
                </Form>
            </Formik>
        </Section>
    );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;