# Write your MySQL query statement below
SELECT Product.product_name, Sales.year,Sales.price
FROM Sales
 JOIN Product ON  sales.product_id = product.product_id  ;