import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';

const Share = () => {
    return (
        <div className="single-widget share-post-widget">
            <p className='text-center'>Bu məqaləni paylaşın</p>
            <div className='d-flex justify-content-between'>
                <FacebookShareButton url={window.location.href} quote='Məqalələrimizi izləməyi unutmayın :)' hashtag='#faydaliaz'>
                    <FacebookIcon round />
                </FacebookShareButton>
                <TwitterShareButton url={window.location.href} title='Məqalələrimizi izləməyi unutmayın :)' hashtags={['faydaliaz', 'article']}>
                    <TwitterIcon round />
                </TwitterShareButton>
                <WhatsappShareButton url={window.location.href} title='Məqalələrimizi izləməyi unutmayın :)'>
                    <WhatsappIcon round />
                </WhatsappShareButton>
            </div>
        </div>
    )
}

export default Share;