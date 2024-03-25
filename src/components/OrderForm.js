"use client"
import React, { useState } from "react"

const TYPE_OPTIONS = ["Provide Order", "Recharge Order", "Addon Order"]

export default function OrderForm() {
  const [orderType, setOrderType] = useState("Provide Order")
  const [msisdn, msisdnSet] = useState("")
  const [showMsisdnModal, setShowMsisdnModal] = useState(false)

  console.log(orderType)
  return (
    <div className="flex justify-between">
      <div>
        <div className="flex justify-between gap-8">
          <div>Order Type</div>
          {/* <div>input</div> */}
          <select
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
          >
            {TYPE_OPTIONS.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between gap-8">
          <div>MSISDN / ISDN</div>
          <div>
            <input type="text" />
            <button
              onClick={() => setShowMsisdnModal(true)}
              className="select-none px-4 py-2 rounded-md"
            >
              Search
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-8">
          <div>Customer No</div>
          <div>input</div>
        </div>
        <div className="flex justify-between gap-8">
          <div>Reason</div>
          <div>input</div>
        </div>
      </div>
      <div>
        <div className="flex justify-between gap-8">
          <div>Order Type</div>
          <div>input</div>
        </div>
        <div className="flex justify-between gap-8">
          <div>MSISDN / ISDN</div>
          <div>input</div>
        </div>
        <div className="flex justify-between gap-8">
          <div>Customer No</div>
          <div>input</div>
        </div>
        <div className="flex justify-between gap-8">
          <div>Reason</div>
          <div>input</div>
        </div>
      </div>
      <div>
        <div className="flex justify-between gap-8">
          <div>Order Type</div>
          <div>input</div>
        </div>
        <div className="flex justify-between gap-8">
          <div>MSISDN / ISDN</div>
          <div>input</div>
        </div>
        <div className="flex justify-between gap-8">
          <div>Customer No</div>
          <div>input</div>
        </div>
        <div className="flex justify-between gap-8">
          <div>Reason</div>
          <div>input</div>
        </div>
      </div>
    </div>
  )
}
