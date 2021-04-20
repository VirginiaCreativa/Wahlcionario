import React, { lazy, Suspense, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Table,
  TitleTable,
  TheadTable,
  TbodyTable,
} from './Conjugacion.styled';
import { PronombresComplementoRemove } from '../../../scripts/plugin';

const Conjugacion = () => {
  const [holdConjugacion, setHoldConjugacion] = useState();
  const hasConjugacion = useSelector((state) => state.palabra.conjugacion);
  useEffect(() => {
    if (hasConjugacion !== undefined) {
      setHoldConjugacion(hasConjugacion);
    } else {
      setHoldConjugacion('...');
    }
  }, [hasConjugacion]);
  return (
    <>
      <TitleTable>
        <h4>Indicativo</h4>
      </TitleTable>
      <Table className="tg">
        <TheadTable>
          <tr>
            <th> </th>
            <th>Presente</th>
            <th>Imperfecto</th>
            <th>Pretérito</th>
            <th>Futuro</th>
            <th>Condicional</th>
          </tr>
        </TheadTable>
        <TbodyTable>
          <tr>
            <td>yo</td>
            <td className="tg-baqh">
              {PronombresComplementoRemove('me fdsfdsa')}
            </td>
            <td className="tg-baqh">
              {PronombresComplementoRemove('se fdafd')}
            </td>
            <td className="tg-baqh">
              {PronombresComplementoRemove('te dfdsf')}
            </td>
            <td className="tg-baqh" />
            <td className="tg-0lax" />
          </tr>
          <tr>
            <td>tú</td>
            <td className="tg-baqh" />
            <td className="tg-baqh" />
            <td className="tg-baqh" />
            <td className="tg-baqh" />
            <td className="tg-0lax" />
          </tr>
          <tr>
            <td>él, ella, usted</td>
            <td className="tg-baqh" />
            <td className="tg-baqh" />
            <td className="tg-baqh" />
            <td className="tg-baqh" />
            <td className="tg-0lax" />
          </tr>
          <tr>
            <td>nosotros</td>
            <td className="tg-baqh" />
            <td className="tg-baqh" />
            <td className="tg-baqh" />
            <td className="tg-baqh" />
            <td className="tg-0lax" />
          </tr>
          <tr>
            <td>vosotros</td>
            <td className="tg-baqh" />
            <td className="tg-baqh" />
            <td className="tg-baqh" />
            <td className="tg-baqh" />
            <td className="tg-0lax" />
          </tr>
          <tr>
            <td className="tg-0lax">Ellos, ellas, ustedes</td>
            <td className="tg-0lax" />
            <td className="tg-0lax" />
            <td className="tg-0lax" />
            <td className="tg-0lax" />
            <td className="tg-0lax" />
          </tr>
        </TbodyTable>
      </Table>
    </>
  );
};

export default Conjugacion;
