import React, { useState, useEffect } from "react";
import { CartDataRemove, GetCartData, } from "../../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from 'react-alert'
import swal from 'sweetalert'

import {
  Box,
  Flex,
  Text,
  FormLabel,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router";
// import BasicUsage from "../BasicUsage";


export const Payment = () => {
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const total = useSelector((state) => state.Products.total);
  // console.log("total", total);


  useEffect(() => {
    dispatch(GetCartData());

  }, [dispatch]);




  const [input, setInput] = useState("");
  const isError = input === "";
  const [card, setCard] = useState("");
  const [cvv, setCVV] = useState("");
  const [year, setYear] = useState("");

  const handleClickPayment = () => {
    if (cvv == "" || year == "" || card == "") {
      alert.error('Enter all Fields !')
    } else {
        swal({
          title: "Payment is Successfull!",
          icon: "success",
          dangerMode: false,
        })
      dispatch(CartDataRemove())
      setTimeout(() => {
        navigate("/")
      }, 4000)
    }
  }
  return (
    <Box width={"100%"}>
      <Box width={"75%"} margin="auto">
        <Box></Box>
        <Flex width={"100%"} justifyContent={"space-between"}>
          <Box
            width={"70%"}
            margin="auto"
            fontSize={"14px"}
            fontWeight="300"
            mt="1rem"
            bg="#f6f6f6"
          >
            <Text
              textAlign={"left"}
              padding="1rem"
              fontSize={"14px"}
              fontWeight={"400"}
            >
              Payment Method
            </Text>
            <Flex
              padding={"1rem"}
              textAlign="left"
              border={"1px solid #e8e8e8"}
            >
              <Box width={"20%"} borderRight={"1px solid #e8e8e8"} bg="white">
                <Text p="1rem" borderBottom={"1px solid #e8e8e8"}>
                  Credit/Debit Card
                </Text>
                <Text p="1rem" borderBottom={"1px solid #e8e8e8"}>
                  Net Banking{" "}
                </Text>
                <Text p="1rem" borderBottom={"1px solid #e8e8e8"}>
                  Wallet
                </Text>
                <Text p="1rem" borderBottom={"1px solid #e8e8e8"}>
                  UPI
                </Text>
                <Text p="1rem">Cash/Card on Delivery</Text>
              </Box>
              <Box bg="white" width="80%" pt="1rem">
                <FormControl isInvalid={isError} width="60%" margin={"auto"}>
                  <FormLabel
                    fontSize={"13px"}
                    fontWeight={400}
                    htmlFor="number"
                  >
                    Card Number
                  </FormLabel>
                  <Input
                    value={card}
                    id="number"
                    type={'Number'}
                    maxlength="16"
                    maxLength={'16'}
                    fontSize={"15px"}
                    fontWeight={300}
                    onChange={(e) => {
                      setCard(e.target.value);
                    }}
                    variant={"outline"}
                    _hover={{ bg: "white" }}
                    _expanded={{ bg: "white" }}
                    _focus={{ boxShadow: "#e8e8e8" }}
                    focusBorderColor="#e8e8e8"
                    colorScheme="white"
                    errorBorderColor="#e8e8e8"
                    borderRadius="0"
                    borderWidth="0.025px"
                    placeholder="Enter Card Number"
                  />
                  {!isError ? (
                    <FormHelperText></FormHelperText>
                  ) : (
                    <FormErrorMessage>Enter Card Number</FormErrorMessage>
                  )}
                  <Flex width="100%" justifyContent={"space-between"}>
                    <Box width="49%">
                      <FormLabel
                        fontSize={"13px"}
                        fontWeight={400}
                        htmlFor="card"
                      >
                        Expire Year
                      </FormLabel>
                      <Input
                        type="number"
                        fontSize={"15px"}
                        fontWeight={300}
                        onChange={(e) => {
                          setYear(e.target.value);
                        }}
                        variant={"outline"}
                        _hover={{ bg: "white" }}
                        _expanded={{ bg: "white" }}
                        _focus={{ boxShadow: "#e8e8e8" }}
                        focusBorderColor="#e8e8e8"
                        colorScheme="white"
                        errorBorderColor="#e8e8e8"
                        borderRadius="0"
                        borderWidth="0.025px"
                      />
                      {!isError ? (
                        <FormHelperText></FormHelperText>
                      ) : (
                        <FormErrorMessage></FormErrorMessage>
                      )}
                    </Box>
                    <Box width="49%">
                      <Box>
                        <FormLabel
                          fontSize={"13px"}
                          fontWeight={400}
                          htmlFor="cvv"
                        >
                          cvv
                        </FormLabel>
                        <Input
                          type="password"
                          fontSize={"15px"}
                          fontWeight={300}
                          onChange={(e) => {
                            setCVV(e.target.value);
                          }}
                          placeholder='CVV'
                          maxLength={'3'}
                          variant={"outline"}
                          _hover={{ bg: "white" }}
                          _expanded={{ bg: "white" }}
                          _focus={{ boxShadow: "#e8e8e8" }}
                          focusBorderColor="#e8e8e8"
                          colorScheme="white"
                          errorBorderColor="#e8e8e8"
                          borderRadius="0"
                          borderWidth="0.025px"
                        />
                        {!isError ? (
                          <FormHelperText></FormHelperText>
                        ) : (
                          <FormErrorMessage></FormErrorMessage>
                        )}
                      </Box>
                    </Box>
                  </Flex>
                  <Box mt="1 rem">
                    <Button
                      variant={"solid"}
                      _hover={{ bg: "#84c225" }}
                      _expanded={{ bg: "#84c225" }}
                      _focus={{ boxShadow: "#e8e8e8" }}
                      focusBorderColor="#e8e8e8"
                      colorScheme="white"
                      errorBorderColor="#e8e8e8"
                      borderRadius="0"
                      borderWidth="0.025px"
                      bg="#84c225"
                      // onClick={() => {

                      // }}
                      onClick={handleClickPayment}
                    >
                      Place Order & Pay
                    </Button>
                  </Box>
                </FormControl>
              </Box>
            </Flex>
          </Box>
          <Box
            width={"33%"}
            padding="1rem"
            border={"1px solid #e8e8e8"}
            height="200px"
            mt="1.5rem"
            bg="#f6f6f6"
          >
            <Text
              borderBottom={"1px solid #e8e8e8"}
              mb={"3px"}
              textAlign={"left"}
              fontSize={"15px"}
              fontWeight={450}
            >
              Order Summery
            </Text>
            <Box
              textAlign={"left"}
              fontSize={"14px"}
              fontWeight={400}
              ml={"1rem"}
            >
              <Text mb={"3px"}>
                Basket value Rs.{total}
              </Text>
              <Flex
                alignItems={"center"}
                padding="2px"
                justifyContent={"space-between"}
              >
                <Text
                  mb={"3px"}
                  textAlign={"left"}
                  fontSize={"15px"}
                  fontWeight={450}
                  pb="1rem"
                  pt="1rem"
                >
                  Total Amount Payable Rs. {total}
                </Text>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>

    </Box>
  );
};
