import { View } from 'react-native';
import { Formik } from 'formik';
import { Button, TextInput, Text } from 'react-native-paper';
import { globalStyles } from '../styles/global';
import * as yup from 'yup';

const reviewSchema = yup.object({
	title: yup.string().required().min(4),
	body: yup.string().required().min(8),
	rating: yup
		.string()
		.required()
		.test('is-num-1-5', 'Rating must be a number 1-5', (val) => {
			return parseInt(val) < 6 && parseInt(val) > 0;
		}),
});

export default function ReviewForm({ addReview }) {
	return (
		<View style={globalStyles.container}>
			<Formik
				initialValues={{ title: '', body: '', rating: '' }}
				validationSchema={reviewSchema}
				onSubmit={(values, actions) => {
					addReview(values);
					actions.resetForm();
				}}
			>
				{({
					handleChange,
					handleBlur,
					handleSubmit,
					values,
					errors,
					touched,
				}) => (
					<View>
						<TextInput
							placeholder='Title'
							onChangeText={handleChange('title')}
							value={values.title}
							mode='outlined'
							label='title'
							onBlur={handleBlur('title')}
						/>
						<Text style={globalStyles.errorText}>
							{touched.title && errors.title}
						</Text>
						<TextInput
							placeholder='Review'
							onChangeText={handleChange('body')}
							value={values.body}
							mode='outlined'
							label='your review'
							multiline
							numberOfLines={8}
							onBlur={handleBlur('body')}
						/>
						<Text style={globalStyles.errorText}>
							{touched.body && errors.body}
						</Text>
						<TextInput
							placeholder='Rating (1-5)'
							onChangeText={handleChange('rating')}
							value={values.rating}
							keyboardType='numeric'
							mode='outlined'
							label='your rating'
							onBlur={handleBlur('rating')}
						/>
						<Text style={globalStyles.errorText}>
							{touched.rating && errors.rating}
						</Text>
						<Button onPress={handleSubmit}>Submit</Button>
					</View>
				)}
			</Formik>
		</View>
	);
}
