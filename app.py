from flask import Flask, request
import pandas as pd
from functools import lru_cache
from flask_cors import CORS


def user_spef_nutrition(infant, age, sex, pregnancy, breastfeeding):
    df = age_group_nutrient_data()

    if age in range(0, 6 + 1) and infant == ('yes'):
        results = df.loc[1]
        return results
    if age in range(7, 12 + 1) and infant == ('yes'):
        results = df.loc[2]
        return results
    if age in range(1, 3 + 1) and infant == ('no'):
        results = df.loc[4]
        return results
    if age in range(4, 8 + 1) and infant == ('no'):
        results = df.loc[5]
        return results
        #MALE USERS
    if age in range(9, 13 + 1) and sex == ('male'):
        results = df.loc[7]
        return results
    if age in range(14, 18 + 1) and sex == ('male'):
        results = df.loc[8]
        return results
    if age in range(19, 30 + 1) and sex == ('male'):
        results = df.loc[9]
        return results
    if age in range(31, 50 + 1) and sex == ('male'):
        results = df.loc[10]
        return results
    if age in range(51, 70 + 1) and sex == ('male'):
        results = df.loc[11]
        return results
    if age > 70 and sex == ('male'):
        results = df.loc[12]
        return results
    #FEMALE USERS
    if age in range(9, 13 + 1) and sex == ('female'):
        results = df.loc[14]
        return results
    if age in range(14, 18 + 1) and sex == ('female'):
        if pregnancy == ('no') and breastfeeding == ('no'):
            results = df.loc[15]
            return results
        elif pregnancy == ('yes') and breastfeeding == ('no'):
            results = df.loc[21]
            return results
        elif breastfeeding == ('yes'):
            results = df.loc[25]
            return results
    if age in range(19, 30 + 1) and sex == ('female'):
        if pregnancy == ('no') and breastfeeding == ('no'):
            results = df.loc[16]
            return results
        elif pregnancy == ('yes') and breastfeeding == ('no'):
            results = df.loc[22]
            return results
        elif breastfeeding.lower() == ('yes'):
            results = df.loc[26]
            return results
    if age in range(31, 50 + 1) and sex.lower() == ('female'):
        if pregnancy.lower() == ('no') and breastfeeding.lower() == ('no'):
            results = df.loc[17]
            return results
        elif pregnancy.lower() == ('yes') and breastfeeding.lower() == ('no'):
            results = df.loc[23]
            return results
        elif breastfeeding.lower() == ('yes'):
            results = df.loc[27]
            return results
    if age in range(51, 70 + 1) and sex.lower() == ('female'):
        results = df.loc[18]
        return results
    if age > 70 and sex.lower() == ('female'):
        results = df.loc[19]
        return results

    check_nutrient = food_nutrient_ranking()

def food_nutrient_ranking():
    nutrient = input('Enter nutrient type to see foods with high desnity\n')
    try:
        df = food_nutrient_values()
        df = df[["Main food description", nutrient]]
        test = df.sort_values(by=[nutrient], ascending=False)
        print(test)
    except:
        print('Sorry, no information available on that nutrient. Please try another\n')
    return food_nutrient_ranking()










@lru_cache(maxsize=None)
def age_group_nutrient_data():
    user_nutrient_needs = pd.read_csv('/Users/candicehines/IdeaProjects/Data/age_group_nutrient_data - Sheet1.csv')
    return user_nutrient_needs

@lru_cache(maxsize=None)
def food_nutrient_values():
    food_nutrient = pd.read_csv('/Users/candicehines/IdeaProjects/Data/food_nutrient_values.csv')
    variable_descriptions = pd.read_csv('/Users/candicehines/IdeaProjects/Data/variable_descriptions.csv')
    print(variable_descriptions["Description"].loc[4])
    return food_nutrient


app = Flask(__name__)
CORS(app)

@app.route('/nutrientcalculator')
def nutrition_calc():
    infant = request.args.get('infant')
    age = int(request.args.get('age'))
    sex = request.args.get('sex')
    pregnant = request.args.get("pregnant")
    breastfeeding = request.args.get("breastfeeding")
    return user_spef_nutrition(infant, age, sex, pregnant, breastfeeding).to_dict()




if __name__ == '__main__':
    app.run(debug=True)
