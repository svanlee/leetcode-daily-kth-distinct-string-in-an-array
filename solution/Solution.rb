# Define a method called kth_distinct that takes an array of strings and an integer k as input
def kth_distinct(arr, k)
  # Create an empty array to store the distinct strings
  new_arr = []
  
  # Count the frequency of each string in the array and iterate over the resulting hash
  arr.tally.each do |key, val|
    # If the frequency of the string is 1, add it to the new array
    new_arr << key if val == 1
  end
  
  # Return the kth distinct string, or an empty string if k is out of bounds
  new_arr[k-1] || ""
end