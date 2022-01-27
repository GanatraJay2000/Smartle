import React, { useEffect, useState } from 'react';
import { isNull, cleanText, getSchema } from '../../util/helpers';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';


interface Props{
    fields: any;
    color?: any;
    btnColor?: any;
}
const ContactForm = ({ fields, color='bg-accent-200', btnColor='bg-color-400' }: Props) => {
    const [isSubmitted, setSubmitted] = useState(false);
    const [fail, setFail] = useState<string | undefined>(undefined);
    const [initValues, setInitValues] = useState<Record<string, any> | undefined>(undefined);
    const [validation, setValidation] = useState<Record<string, any> | undefined>(undefined);
    
    useEffect(() => {                    
        if (isNull(fields)) return;        
        fields.sort((a: { priority: number; }, b: { priority: number; }) => a.priority - b.priority);
        const schemaObj: Record<string, any> = {};
        const lclInitValues: Record<string, any> = {};        

        fields.forEach((f:any, idx:number) => {
            var labelName:string = cleanText(f.label) as string;
            lclInitValues[labelName] = '';
            schemaObj[labelName] = getSchema(labelName, f.required, f.type, Yup)
        })
        setValidation(Yup.object(schemaObj));
        setInitValues(lclInitValues);
    }, [fields])



    return (
        <div>            
            {!fail && !isSubmitted && !isNull(initValues) && !isNull(validation) && (<>
                <Formik
                    initialValues={initValues as any}
                    validationSchema={validation as any}
                    onSubmit={async (values, { setSubmitting }) => { 
                        try {                            
                            console.log(values);
                            setSubmitting(false);
							setSubmitted(true);
                        } catch (e: any) {
                            setFail(e.message);                            
                        }
                    }}
                >
                    {({ errors, touched, values, isSubmitting, handleChange, handleBlur, setFieldValue, setFieldTouched }) => (<>                        
                        <Form className='contactForm'>
                            <div className={`w-full mb-7 ${color} rounded-lg transition hover:shadow-lg shadow-md flex flex-wrap p-5`}>
                            {
                                fields.map((f: any, idx: number) => {
                                    var labelName = cleanText(f.label) as string;
                                    return (<div key={idx} className={`${f.extraClass ?? 'mt-6'} px-4 w-${f.width ?? 'full'}`}>
                                        {
                                            ['text'].includes(f.type) && f.multiline===true ? (
                                                <TextField                                                        
                                                    multiline    
                                                    rows={4}
                                                    fullWidth                                                    
                                                    helperText={
                                                        Boolean(touched[labelName]) && Boolean(errors[labelName]) && (cleanText(errors[labelName] as string, true) as string)?.toUpperCase()
                                                    }
                                                    id={labelName}                                                    
                                                    label={f.label}
                                                    name={labelName}
                                                    error={Boolean(touched[labelName]) && Boolean(errors[labelName])}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    variant="outlined">                                                
                                                </TextField>                                                    
                                            ) :['text', 'input', 'string', 'email', 'number'].includes(f.type) ? (
                                                    <TextField                                                         
                                                    fullWidth                                                    
                                                    helperText={
                                                        Boolean(touched[labelName]) && Boolean(errors[labelName]) && (cleanText(errors[labelName] as string, true) as string)?.toUpperCase()
                                                    }
                                                    id={labelName}
                                                    type={f.type}
                                                    label={f.label}
                                                    name={labelName}
                                                    error={Boolean(touched[labelName]) && Boolean(errors[labelName])}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    variant="outlined">                                                
                                                </TextField>
                                            ) : ['select'].includes(f.type) ? (
                                                <TextField                                                                
                                                    fullWidth    
                                                    select
                                                    helperText={
                                                        Boolean(touched[labelName]) && Boolean(errors[labelName]) && (cleanText(errors[labelName] as string, true) as string)?.toUpperCase()
                                                    }
                                                    id={labelName}
                                                    type={f.type}
                                                    label={f.label}
                                                    name={labelName}
                                                    error={Boolean(touched[labelName]) && Boolean(errors[labelName])}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    variant="outlined">
                                                    {
                                                        f.children.map((option: { value:  string; label: string }) => (
                                                                <MenuItem key={option.value} value={option.value}>
                                                                        {option.label}
                                                                </MenuItem>
                                                            ))
                                                    }
                                                </TextField>
                                                ) : ['multiradio'].includes(f.type) ? (<>
                                                <FormControl className="m-0" sx={{ m: 3 }} error={Boolean(touched[labelName]) && Boolean(errors[labelName])} variant="standard">
                                                    <FormLabel id={"label_"+labelName}>{f.label}</FormLabel>
                                                    <RadioGroup
                                                        row
                                                        id={labelName}
                                                        name={labelName}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        >
                                                        {
                                                            f.children.map((option: { value:  string; label: string }) => (                                                            
                                                                <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
                                                            ))
                                                        }
                                                    </RadioGroup>
                                                    <FormHelperText>
                                                        {Boolean(touched[labelName]) && Boolean(errors[labelName]) && (cleanText(errors[labelName] as string, true) as string)?.toUpperCase()}
                                                    </FormHelperText>
                                                </FormControl>                                                                  
                                            </>) : (<></>)
                                        }                                            
                                    </div>);
                                })
                                }    
                            </div>    
                            <Button
                                type='submit'
                                className={`font-bold text-xl text-white w-full py-3 rounded-md mb-6 ${btnColor}`}
                                disabled={isSubmitting}	                               
							>
								Submit Form
							</Button>
                        </Form>
                    </>)}
                    
                
                </Formik>
            </>)}
            {isSubmitted && !fail && <Alert severity="success">Form Submitted Successfully.</Alert>}
            {fail && <Alert severity="error">Something went wrong! ({fail})</Alert>}
        </div>
    );
}

export default ContactForm;
