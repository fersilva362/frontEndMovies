import { Form, Button } from "react-bootstrap";

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
    return (<div>

        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label></Form.Label>
                <Form.Control ref={revText} defaultValue={defaultValue} as="textarea" rows={3}></Form.Control>
            </Form.Group>
            <Button onClick={handleSubmit} variant="outline-info" >Submmit</Button>

        </Form>
    </div>)
}
export default ReviewForm;