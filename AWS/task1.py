import json
from typing import Union

def lambda_handler(event, context):
    num1 = event.get('num1')
    num2 = event.get('num2')

    if not isinstance(num1, (int, float)) or not isinstance(num2, (int, float)):
        return {
            'statusCode': 400,
            'body': json.dumps({'message': 'Both inputs must be numbers.'})
        }

    result = _calculate(num1, num2)

    return {
        'statusCode': 200,
        'body': json.dumps({'result': result})
    }
    
def _calculate(number1: Union[int,float], number2: Union[int,float]) -> Union[int,float]:
    return number1 + number2

