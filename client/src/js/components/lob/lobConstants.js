import imageTable from '../../../images/generic_simple_lob_example_tile.jpg';
import imageNoTable from '../../../images/generic_no_table_example_tile.jpg';

export default () => {
  return {
    statements: [
      {
        id: 1,
        header: 'Table / Invoice',
        body: 'Table itemizing services',
        image: imageNoTable
      },
      {
        id: 2,
        header: 'No Table / Billing Statement',
        body: 'Simple. Subtotal, Taxes, and Total',
        image: imageTable
      }
    ]
  }
}