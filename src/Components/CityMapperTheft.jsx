import { valueToCommontransactions } from '../utils/mccCode';

const CityMapperTheft = ({ overPayment, totalSavings }) => {
    const {
        valueOfTransactions, totalTransactions, 
        filteredMCC, overpaymentValue, 
        overpaymentAsPctOfTotalSpend
    } = valueToCommontransactions(overPayment, totalSavings);

    const savingsAsPctOfTotalSpend = ((totalSavings / valueOfTransactions)).toFixed(0);

    console.log("....");
    console.log(overpaymentAsPctOfTotalSpend);

    return (
        <>
            <div className="savings">
                <p>
                    Overpayment of <b>£{overPayment}</b> afford savings equivalent to <b>{savingsAsPctOfTotalSpend}x</b> of your total spend on <b>{filteredMCC}</b> last month (£{valueOfTransactions.toFixed(0)})
                </p>
            </div>
        </>
    );
}

export default CityMapperTheft;