import axios from 'axios'
import { Table } from 'react-table'

const api_table = () => {

return (
    <Table>
        <thead>
            <tr>
                Animal
            </tr>
        </thead>
        <tbody>
            <td>Duck</td>
            <td>Goose</td>
            <td>Owl</td>
            <td>Blue Jay</td>
        </tbody>
    </Table>

);

}

export default api_table