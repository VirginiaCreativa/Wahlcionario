import React from 'react';
import { Table, TheadTable, TbodyTable } from './Conjugacion.styled';

const Conjugacion = () => {
  return (
    <div>
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
            <td className="tg-baqh" />
            <td className="tg-baqh" />
            <td className="tg-baqh" />
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
    </div>
  );
};

export default Conjugacion;
