# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.
# Declare a method that takes in an array and a string
# Declare a variable equal to the array with .select do |value|
# Inside of the code block, return a boolean using .include? on the value to check for the string
# end do block
# call on variable
# end method


beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
letter_j = 'J'
letters_ate = 'ate'

def letter_finder arr, str
    does_it_have = arr.select do |value|
        value.downcase.include? str.downcase
    end
    does_it_have
end

p letter_finder(beverages_array, letter_o)
p letter_finder(beverages_array, letter_t)
p letter_finder(beverages_array, letter_j)
p letter_finder(beverages_array, letters_ate)
# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.
# Declare method that takes in an array
# Declare sum to equal 0
# Iteration on given array using .each do |value|
# inside code block, return the sum plus equal to value
# end code block
# return sum
# end method

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100
nums_array3 = [-4, 42, 19, -23]

def sum_nums arr
    sum = 0
    arr.each do |value|
        sum += value
    end
    sum
end

p sum_nums( nums_array1)
p sum_nums( nums_array2)
p sum_nums( nums_array3)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Declare class
# Initialize variables for model, wheels, and current_speed
# Declare attr_accessor for getting and setting :model, :wheels, and :current_speed
# Declare bike_info method that returns information about the bike using string interpolation
# end method
# end class

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    attr_accessor :model, :wheels, :current_speed
    def initialize model
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info
        "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
    end
    def pedal_faster speed
        @current_speed = @current_speed += speed
    end
    def brake speed
        if @current_speed - speed >= 0
            @current_speed - speed
        else
            @current_speed = 0
        end
    end
end

bike_1 = Bike.new 'Santa Cruz'
p bike_1.bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Declare pedal_faster method that takes in speed
# Return @current_speed to now equal @current_speed += speed
# end method
# Declare brake method that takes in speed
# Conditional if  @current_speed - speed >= 0
# return  @current_speed - speed
# Else return  @current_speed = 0 to make sure we don't get any negative speeds going on
# double end if statement and method


# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(10) => 20
# Expected output example: my_bike.brake(25) => 0

p bike_1.pedal_faster 10
p bike_1.pedal_faster 10
p bike_1.bike_info
p bike_1.brake 25
p bike_1.bike_info

# Added Psuedo code!!! Hope you enjoy! 😊