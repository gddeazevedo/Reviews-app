import React from 'react';
import {
    Text,
    TextInput,
    View
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { globalStyles } from '../styles/global';
import FlatButton from '../shared/FlatButton';



const reviewSchema = yup.object({
    title: yup
        .string()
        .required()
        .min(4),
    body: yup
        .string()
        .required()
        .min(8),
    rating: yup
        .string()
        .required()
        .test('is-num-1-5', 'Rating must be a number between 1 and 5', (value) => {
            return parseInt(value) < 6 && parseInt(value) > 0;
        })
});


export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {props => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Review title"
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')} />

                        <Text style={globalStyles.errorText}>
                            {props.touched.title && props.errors.title}
                        </Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder="Review body"
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                            multiline />

                        <Text style={globalStyles.errorText}>
                            {props.touched.body && props.errors.body}
                        </Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType="numeric"
                            onBlur={props.handleBlur('rating')} />

                        <Text style={globalStyles.errorText}>
                            {props.touched.rating && props.errors.rating}
                        </Text>

                        <FlatButton title="submit" onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
}