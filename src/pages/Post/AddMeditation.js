/* eslint-disable */ 
import React from 'react'
import axios from 'axios';
import { useDispatch , useSelector} from "react-redux";
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';
import { useEffect, useState } from "react";
import { setBuddistMeditationDetail } from 'src/feature/actions';
import { useNavigate } from 'react-router';

const AddMeditation = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const REACT_API_TOKEN = localStorage.YT_Token

    const auth = useSelector(state => state.auth);
    const error = useSelector(state => state.error);

    const [awsImage, setAwsImage] = useState([])

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        address: '',
        city: '',
        state: '',
        pinCode: '',
        country: '',
        image: null
    });

    const [inValid, setInvalid] = useState(null);

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])

        let formData = new FormData();    //formdata object

        formData.append('image', e.target.files[0]);   //append the values with key, value pair
        formData.append('name', e.target.files[0].name);

        const config = {
            headers:{
                Authorization: `Bearer ${REACT_API_TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        axios.post('http://18.224.141.133/api/uploads/documents', formData, config)
            .then((res) => {
                setAwsImage(
                    [
                        {
                            url: res.data.data.url
                        }
                    ]
                )
            })
            .catch((err) => {
                setInvalid(err.response)
            })
    }

    useEffect(() => {
        if (Object.keys(error).length > 0 && error !== undefined) {
            if(error?.code === 500) {
                setInvalid(error?.message);
            }
        }
    }, [error]);

    const validationSchema = Yup.object().shape({
        name: Yup.string().max(50).required('Name is required'),
        address: Yup.string().max(100).required('Address is required'),
        description: Yup.string().max(100).required('Description is required'),
        city: Yup.string().max(100).required('City is required'),
        state: Yup.string().max(100).required('State is required'),
        country: Yup.string().max(100).required('Country is required'),
        pinCode: Yup.string().max(100).required('Pin is required')
    })

    const handleSubmit = (values, {setSubmitting}) => {

        setSubmitting(true);

        if(awsImage.length > 0) {
            const data = {
                images: awsImage,
                name: values.name,
                description: values.description,
                address: values.address,
                city: values.city,
                state: values.state,
                country: values.country,
                pin: values.pinCode,
                latitude: "0",
                longitude: "0",
                organisationId: auth.user.organisationId
            }
    
            dispatch(setBuddistMeditationDetail(data, navigate));
            console.log(data)
        } else {
            window.alert("Image not selected")
        }

        setSubmitting(false)

    }

    return (
        <>
        <Helmet>
            <title>Add Meditation | Yapth</title>
        </Helmet>
        <Box
            sx={{
                backgroundColor: 'background.default',
                display: 'flex',
                flexDirection: 'column',
                minheight: '100%',
                py: 3,
                justifyContent: 'center',
                overflow: 'scroll'
            }}
        >
        <Container maxWidth="sm">
            <Formik
                initialValues={formData}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    touched,
                    values
                }) => (
                <form onSubmit={handleSubmit}>
                    <Box 
                        sx={{ 
                            my: 3,
                            textAlign: 'center'
                        }}
                    >
                        <Typography
                            color="textPrimary"
                            variant="h2"
                        >
                            Add Meditation
                        </Typography>
                    </Box>
                    <Grid container spacing={1}>
                        <Grid 
                            item md={12} 
                            xs={12}
                        >
                            <Box  sx={{
                                display: 'flex',
                            }}>
                                <input type="file" onChange={onSelectFile} />
                                {
                                    selectedFile &&
                                    <img 
                                        src={preview} 
                                        alt="preview image"
                                        height="100"
                                        width="100"
                                    />
                                }
                            </Box>
                        </Grid>
                        <Grid
                            item
                            md={12}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(touched.name && errors.name)}
                                fullWidth
                                helperText={touched.name && errors.name}
                                label="Name"
                                margin="normal"
                                name="name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="text"
                                value={values.name}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={12}
                            xs={12}
                        >
                           <TextField
                                error={Boolean(touched.address && errors.address)}
                                fullWidth
                                helperText={touched.address && errors.address}
                                label="Address"
                                margin="normal"
                                name="address"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="text"
                                value={values.address}
                                variant="outlined"
                            /> 
                        </Grid>
                        <Grid
                            item
                            md={12}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(touched.description && errors.description)}
                                fullWidth
                                helperText={touched.description && errors.description}
                                label="Description"
                                margin="normal"
                                name="description"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="text"
                                value={values.description}
                                variant="outlined"
                                multiline
                                rows={3}
                                rowsmax={7}
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(touched.city && errors.city)}
                                fullWidth
                                helperText={touched.city && errors.city}
                                label="City"
                                margin="normal"
                                name="city"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="text"
                                value={values.city}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(touched.state && errors.state)}
                                fullWidth
                                helperText={touched.state && errors.state}
                                label="State"
                                margin="normal"
                                name="state"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="text"
                                value={values.state}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(touched.country && errors.country)}
                                fullWidth
                                helperText={touched.country && errors.country}
                                label="Country"
                                margin="normal"
                                name="country"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="text"
                                value={values.country}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                error={Boolean(touched.pinCode && errors.pinCode)}
                                fullWidth
                                helperText={touched.pinCode && errors.pinCode}
                                label="Pin Code"
                                margin="normal"
                                name="pinCode"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="text"
                                value={values.pinCode}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    {
                        inValid !== null && (
                            <small style={{
                            color: 'red'
                            }}>{inValid}</small>
                        )
                    }
                    <Box sx={{ py: 2 }}>
                    <Button
                        color="primary"
                        disabled={isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                    >
                        Add Meditation
                    </Button>
                    </Box>
                </form>
                )}
            </Formik>
        </Container>
        </Box>
        </>
    )
}

export default AddMeditation