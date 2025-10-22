def process_data(data):
    result = []
    for i in range(len(data)):
        if data[i] != None and data[i] > 0:
            temp = data[i] * 2
            if temp < 100:
                result.append(temp)
            else:
                result.append(100)
    return result
