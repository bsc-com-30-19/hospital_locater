import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* ---------------------------------------------
   BUTTON STYLES (Modularized)
   Using Tailwind for layout/typography but keeping
   exact numeric sizes, paddings and shadows via inline styles
   so nothing changes visually from your original design.
---------------------------------------------- */
const getBaseButtonStyle = (processing) => ({
    backgroundColor: '#9BD1E5',
    border: 'none',
    padding: '16px 28px', // matches px-7 py-4
    borderRadius: 10,
    cursor: processing ? 'default' : 'pointer',
    fontSize: 18,
    minWidth: 280,
    height: 56,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#062028',
    transition: 'transform 180ms ease, box-shadow 180ms ease, opacity 180ms ease',
    boxShadow: '0 6px 14px rgba(0,0,0,0.10)'
});

const getHoverStyle = (hover, processing) =>
    hover && !processing
        ? { transform: 'translateY(-3px)', boxShadow: '0 10px 22px rgba(0,0,0,0.14)' }
        : {};

const getDisabledStyle = (processing) =>
    processing ? { opacity: 0.78 } : {};

const LocaterButton = ({ onButtonClick, hospitalData }) =>{
    const [processing, setProcessing] = useState(false);
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();

    const handleIdentify = () => {
        setProcessing(true);
        setTimeout(() => navigate('/hospitallist', {}), 2200);
    };

    const buttonStyle = {
        ...getBaseButtonStyle(processing),
        ...getHoverStyle(hover, processing),
        ...getDisabledStyle(processing)
    };
    return(
            <button
                onClick={onButtonClick}
                disabled={processing}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="flex items-center justify-center font-semibold text-lg"
                style={buttonStyle}
            >
                <span style={{ fontWeight: 700 }}>
                    {processing
                        ? 'Finding Near Hospitals please wait...'
                        : 'Locate Hospitals Near Me'}
                </span>
            </button>
    )
}

export default LocaterButton