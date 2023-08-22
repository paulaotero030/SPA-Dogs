import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(getDetail());
    };
  }, [id, dispatch]);

  const detail = useSelector((state) => state.detail);

  return (
    <div>
      <div>
        <button onClick={() => navigate('/home')}>HOME</button>

        {detail.length > 0 ? (
          <div>
            <h1>{detail[0].name}</h1>
            <img src={detail[0].image} alt='not found' />
            <p>
              Height :{' '}
              {!detail[0].createdInDb
                ? detail[0].height
                : detail[0].heightMin + ' - ' + detail[0].heightMax}
            </p>
            <p>
              Weight :{' '}
              {!detail[0].createdInDb
                ? detail[0].weight
                : detail[0].weightMin + ' - ' + detail[0].weightMax}
            </p>
            <p>Life Span : {detail[0].life_span}</p>
            <p>
              Temperaments :{' '}
              {!detail[0].createdInDb
                ? detail[0].temperament + ' '
                : detail[0].temperaments.map((el, index) =>
                    detail[0].temperaments.length - 1 === index
                      ? el.name
                      : el.name + ', '
                  )}
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Detail;
