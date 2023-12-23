import { useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import ReviewForm from '../ReviewForm'
import api from '../../../api/axiosConfig'

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {

    const revText = useRef()
    let params = useParams()
    const movieId = params.movieId
    useEffect(() => { getMovieData(movieId) }, [])
    const addReview = async (e) => {
        e.preventDefault();
        const rev = revText.current
        try {
            const response = await api.post('/api/v1/reviews', { "reviewBody": rev.value, "imdbId": movieId })
            const updateReview = [{ body: rev.value }, ...reviews]
            rev.value = ''
            setReviews(updateReview)
            console.log(reviews)

        } catch (error) {
            console.log(error)

        }



    }


    return (<Container>
        <Row>
            <Col><h3></h3></Col>
        </Row>
        <Row className='mt-2'><Col><img src={movie?.poster || ''} /></Col>
            <Col>

                <>
                    <Row>
                        <Col>
                            <ReviewForm handleSubmit={addReview} labelText="Write a review" revText={revText} />
                        </Col>
                    </Row>
                    <Row>
                        <Col><hr /></Col>
                    </Row>
                </>

                {
                    reviews?.map((review) => {
                        return (<>
                            <Row><Col >{review.body}</Col></Row>
                            <Row>
                                <Col><hr /></Col>
                            </Row></>)
                    })
                }
            </Col>


        </Row>
    </Container>)
}
export default Reviews;