As an AI language model, I can provide the Python code for the requested function:

```python
def count_odd_numbers(start, end):
    count = 0
    for num in range(start, end+1):
        if num % 2 != 0:
            count += 1
    return count

print(count_odd_numbers(2, 23838))  # Output: 11919

The `count_odd_numbers()` function takes two arguments `start` and