import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import axios from '../helper/axios';
import { error, success } from '../helper/notification';

const Offer = () => {

    const [offer, setOffer] = useState('');

    const { full_name } = useSelector(state => state.user.user);
    const history = useHistory();

    const changeHandler = e => setOffer(e.target.value);

    const submitHandler = async e => {
        try {
            e.preventDefault();
            const res = await axios.post('/offer/addOffer', { offer, full_name });
            if (res.data) {
                history.replace('/');
                success('Şikayət və ya təklifinizi bizə bildirdiyiniz üçün təşəkkür edirik. Bildirdiyiniz məsələyə mütləq baxacağıq.')
            }
        } catch (err) {
            error(`Xəta baş verdi: ${err}`);
        }
    }

    return (
        <div className="vizew-login-area section-padding-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <div className="login-content">
                            {/* Section Title */}
                            <div className="section-heading">
                                <h4>Şikayət və təkliflər bölməsi</h4>
                                <div className="line" />
                            </div>
                            <form onSubmit={submitHandler}>
                                <div className='form-group'>
                                    <textarea
                                        rows='8'
                                        maxLength='255'
                                        placeholder='Şikayətinizi bildirin (maksimum 255 şrift yaza bilərsiniz)...'
                                        className='vizew form-control h-100'
                                        name='offer'
                                        value={offer}
                                        onChange={changeHandler} />
                                </div>
                                <button className="btn vizew-btn rounded w-100 mt-30">Bildir</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer;